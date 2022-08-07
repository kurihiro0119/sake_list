import { Timestamp } from '@google-cloud/firestore'
import exp from 'constants'

export interface News {
    id: string
    content: string
    created_at: string
}
export interface EditNews {
    id: string
    content: string
}
export interface Task {
    id: string
    title: string
    created_at: string
    user_id: string
}
export interface EditTask {
    id: string
    title: string
}

export interface Sake {
    id: string
    acidity: Number
    alcohol_degree: string
    brand: string
    comment: string
    evaluation: Number
    img_url: string
    kinds: string
    local: string
    polishing_degree: string
    rice_type: string
    sake_degree: string
    update_date: string
}

export interface EditSake {
    id: string
    acidity: Number
    alcohol_degree: string
    brand: string
    comment: string
    evaluation: Number
    img_url: string | undefined
    kinds: string
    local: string
    polishing_degree: string
    rice_type: string
    sake_degree: string
}