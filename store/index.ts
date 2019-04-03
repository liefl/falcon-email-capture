export interface State {
  index: number
}

export const state = (): State => ({
  index: 0
})

export const mutations = {
  add (state: State) {
    state.index++
  }
}