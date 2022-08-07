import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditNews, EditTask, EditSake } from '../types/types'
import { RootState } from '../app/store'
import { title } from 'process'


export interface uiState {
    editedTask: EditTask
    editedNews: EditNews
    editedSake: EditSake
}

const initialState: uiState = {
    editedTask: {
        id: '',
        title: '',
    },
    editedNews: {
        id: '',
        content: '',
    },
    editedSake: {
        id: '',
        acidity: 0,
        alcohol_degree: '',
        brand: '',
        comment: '',
        evaluation: 0,
        img_url: '',
        kinds: '',
        local: '',
        polishing_degree: '',
        rice_type: '',
        sake_degree: '',
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setEditedTask: (state, action: PayloadAction<EditTask>) => {
            state.editedTask = action.payload
        },
        resetEditedTask: (state) => {
            state.editedTask = initialState.editedTask
        },
        setEditedNews: (state, action: PayloadAction<EditNews>) => {
            state.editedNews = action.payload
        },
        resetEditedNews: (state) => {
            state.editedNews = initialState.editedNews
        },
        setEditedSake: (state, action: PayloadAction<EditSake>) => {
            state.editedSake = action.payload
        },
        resetEditedSake: (state) => {
            state.editedSake = initialState.editedSake
        },
    },
})
export const {
    setEditedTask,
    resetEditedTask,
    setEditedNews,
    resetEditedNews,
    setEditedSake,
    resetEditedSake
} = uiSlice.actions

export const selectTask = (state: RootState) => state.ui.editedTask
export const selectNews = (state: RootState) => state.ui.editedNews
export const selectSake = (state: RootState) => state.ui.editedSake
export default uiSlice.reducer