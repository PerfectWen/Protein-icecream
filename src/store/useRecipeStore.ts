import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CustomIngredient, RecipeLine } from "@/utils/nutrition"

export type ViewMode = "total" | "perServing"

export type RecipeState = {
  servings: number
  viewMode: ViewMode
  lines: RecipeLine[]
  customIngredients: Record<string, CustomIngredient>
  setServings: (servings: number) => void
  setViewMode: (viewMode: ViewMode) => void
  setLineAmount: (ingredientId: string, amount: number) => void
  setLineSugarGrams: (ingredientId: string, sugarGrams: number) => void
  addLine: (ingredientId: string) => void
  removeLine: (ingredientId: string) => void
  clearLines: () => void
  upsertCustomIngredient: (ing: CustomIngredient) => void
  removeCustomIngredient: (id: string) => void
}

const STORAGE_KEY = "recipeConfigFreeMix"

function clampServings(n: number) {
  if (!Number.isFinite(n)) return 1
  return Math.min(4, Math.max(1, Math.round(n)))
}

function sanitizeAmount(n: number) {
  if (!Number.isFinite(n)) return 0
  return Math.max(0, Math.round(n * 10) / 10)
}

export const useRecipeStore = create<RecipeState>()(
  persist(
    (set, get) => ({
      servings: 1,
      viewMode: "perServing",
      lines: [],
      customIngredients: {},
      setServings: (servings) => set({ servings: clampServings(servings) }),
      setViewMode: (viewMode) => set({ viewMode }),
      setLineAmount: (ingredientId, amount) =>
        set({
          lines: get().lines.map((l) =>
            l.ingredientId === ingredientId ? { ...l, amount: sanitizeAmount(amount) } : l,
          ),
        }),
      setLineSugarGrams: (ingredientId, sugarGrams) =>
        set({
          lines: get().lines.map((l) =>
            l.ingredientId === ingredientId ? { ...l, sugarGrams: sanitizeAmount(sugarGrams) } : l,
          ),
        }),
      addLine: (ingredientId) =>
        set((state) => {
          if (state.lines.some((l) => l.ingredientId === ingredientId)) return state
          return {
            lines: [
              ...state.lines,
              {
                ingredientId,
                amount: 50,
                ...(ingredientId === "greekYogurtSweetened" ? { sugarGrams: 0 } : {}),
              },
            ],
          }
        }),
      removeLine: (ingredientId) =>
        set((state) => ({ lines: state.lines.filter((l) => l.ingredientId !== ingredientId) })),
      clearLines: () => set({ lines: [] }),
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
    }),
    {
      name: STORAGE_KEY,
      version: 1,
      partialize: (s) => ({
        servings: s.servings,
        viewMode: s.viewMode,
        lines: s.lines,
        customIngredients: s.customIngredients,
      }),
    },
  ),
)
