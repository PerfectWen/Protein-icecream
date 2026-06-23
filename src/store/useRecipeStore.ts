import { create } from "zustand"
import { persist } from "zustand/middleware"
import { presetById, presets, type RecipeItem } from "@/data/presets"
import type { CustomIngredient } from "@/utils/nutrition"

export type Mode = "preset" | "custom"
export type ViewMode = "total" | "perServing"

export type RecipeState = {
  mode: Mode
  selectedPresetId: string
  servings: number
  viewMode: ViewMode
  lines: RecipeItem[]
  customIngredients: Record<string, CustomIngredient>
  setMode: (mode: Mode) => void
  selectPreset: (presetId: string) => void
  setServings: (servings: number) => void
  setViewMode: (viewMode: ViewMode) => void
  setLineAmount: (ingredientId: string, amount: number) => void
  addLine: (ingredientId: string) => void
  removeLine: (ingredientId: string) => void
  upsertCustomIngredient: (ing: CustomIngredient) => void
  removeCustomIngredient: (id: string) => void
  resetToPreset: () => void
}

const STORAGE_KEY = "recipeConfig"

function clampServings(n: number) {
  if (!Number.isFinite(n)) return 1
  return Math.min(4, Math.max(1, Math.round(n)))
}

function sanitizeAmount(n: number) {
  if (!Number.isFinite(n)) return 0
  return Math.max(0, Math.round(n * 10) / 10)
}

const defaultPresetId = presets[0]?.id ?? "banana-choco"

export const useRecipeStore = create<RecipeState>()(
  persist(
    (set, get) => ({
      mode: "preset",
      selectedPresetId: defaultPresetId,
      servings: 1,
      viewMode: "perServing",
      lines: presetById[defaultPresetId]?.items ?? [],
      customIngredients: {},
      setMode: (mode) => set({ mode }),
      selectPreset: (presetId) =>
        set({
          selectedPresetId: presetId,
          mode: "preset",
          lines: presetById[presetId]?.items ?? [],
        }),
      setServings: (servings) => set({ servings: clampServings(servings) }),
      setViewMode: (viewMode) => set({ viewMode }),
      setLineAmount: (ingredientId, amount) =>
        set({
          lines: get().lines.map((l) =>
            l.ingredientId === ingredientId ? { ...l, amount: sanitizeAmount(amount) } : l,
          ),
        }),
      addLine: (ingredientId) =>
        set((state) => {
          if (state.lines.some((l) => l.ingredientId === ingredientId)) return state
          return {
            mode: "custom",
            lines: [...state.lines, { ingredientId, amount: 50 }],
          }
        }),
      removeLine: (ingredientId) =>
        set((state) => ({
          mode: "custom",
          lines: state.lines.filter((l) => l.ingredientId !== ingredientId),
        })),
      upsertCustomIngredient: (ing) =>
        set((state) => ({
          customIngredients: {
            ...state.customIngredients,
            [ing.id]: ing,
          },
        })),
      removeCustomIngredient: (id) =>
        set((state) => {
          const next = { ...state.customIngredients }
          delete next[id]
          return { customIngredients: next }
        }),
      resetToPreset: () => {
        const presetId = get().selectedPresetId
        set({
          mode: "preset",
          lines: presetById[presetId]?.items ?? [],
        })
      },
    }),
    {
      name: STORAGE_KEY,
      version: 1,
      partialize: (s) => ({
        mode: s.mode,
        selectedPresetId: s.selectedPresetId,
        servings: s.servings,
        viewMode: s.viewMode,
        lines: s.lines,
        customIngredients: s.customIngredients,
      }),
    },
  ),
)

