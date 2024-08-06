import { create } from 'zustand'
import { addDays } from 'date-fns'

type RangeItem = {
  startDate: Date | undefined
  endDate: Date | undefined
  key: string
}

type SearchState = {
  selectedContinent: string
  selectedDateRange: RangeItem[]
  maxPrice: number
  setContinent: (continent: string) => void
  setDateRange: (dateRange: RangeItem[]) => void
  setMaxPrice: (price: number) => void
}

export const useSearchStore = create<SearchState>((set) => ({
  selectedContinent: '',
  selectedDateRange: [
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 30000),
      key: 'selection',
    },
  ],
  maxPrice: 0,
  setContinent: (continent) => set({ selectedContinent: continent }),
  setDateRange: (dateRange) => set({ selectedDateRange: dateRange }),
  setMaxPrice: (price) => set({ maxPrice: price }),
}))
