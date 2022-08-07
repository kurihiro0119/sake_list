import { memo } from "react";
import { useQuerySake } from '../hooks/useQuerySake';
import { SakeItemMemo } from './SakeItem';

const SakeList = () => {
    const { status, data } = useQuerySake()
    if (status === 'loading') return <div>{'Loading...'}</div>
    if (status === 'error') return <div>{'Error'}</div>
    return (
        <ul>
            {data?.map((sake) => (
                <SakeItemMemo key={sake.id} sake={sake} />
            ))}
        </ul>
    )
}
export const SakeListMemo = memo(SakeList)