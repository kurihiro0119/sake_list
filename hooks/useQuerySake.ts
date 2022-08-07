import { request } from 'graphql-request'
import { useQuery } from 'react-query'
import { Sake } from '../types/types'
import { GET_SAKE } from '../queries/queries'

interface SakeRes {
    sakes: Sake[]
}

export const fetchSake = async () => {
    const { sakes:data } = await request<SakeRes>(
        process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
        GET_SAKE
    )
    return data
}

export const useQuerySake = () => {
    return useQuery<Sake[], Error>({
        queryKey: 'sake',
        queryFn: fetchSake,
        staleTime: 0,
    })
}