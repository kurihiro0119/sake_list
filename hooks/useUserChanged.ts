import { useEffect } from 'react';
import firebase from '../firebaseConfig';
import { useRouter } from 'next/router';
import Cookie  from 'universal-cookie';

export let unSubMeta: () => void

export const useUserChanged = () => {
    const cookie = new Cookie()
    const router = useRouter()
    const HASURA_TOKEN_KEY = 'https://hasura.io/jwt/claims'

    useEffect(() => {
        const unSubUser = firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                const token = await user.getIdToken(true)
                const idTOkenResult = await user.getIdTokenResult()
                const hasuraClaims = idTOkenResult.claims[HASURA_TOKEN_KEY]
                if (hasuraClaims) {
                    cookie.set('token', token, { path: '/' })
                }
            }
        })
        return () => {
            unSubUser()
        }
    }, [])
    return {}
}