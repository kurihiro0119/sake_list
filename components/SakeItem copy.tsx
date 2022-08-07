import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { setEditedNews, setEditedSake } from '../slices/uiSlice'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { useAppMutate } from '../hooks/useAppMutate'
import { Sake } from '../types/types'

interface Props {
  sake: Sake
}

const SakeItem = ({ sake }) => {
  const dispatch = useDispatch()
  const { deleteSakesMutation } = useAppMutate()

  if (deleteSakesMutation.isLoading) {
    return <p>Deleting...</p>
  }
  if (deleteSakesMutation.error) {
    return <p>Error</p>
  }
  return (
    <li className="my-3">
      <span className="font-bold">{sake.local} </span>
      <span className="font-bold">{sake.brand} </span>
      <span className="font-bold">{sake.kinds} </span>
      <span className="font-bold">{sake.rice_type} </span>
      <span className="font-bold">{sake.sake_degree} </span>
      <span className="font-bold">{sake.polishing_degree} </span>
      <span className="font-bold">{sake.alcohol_degree} </span>
      <span className="font-bold">{sake.comment} </span>
      <span className="font-bold">{sake.evaluation}</span>
      <div className="flex float-right ml-20">
        <PencilAltIcon
          className="h-5 w-5 mx-1 text-blue-500 cursor-pointer"
          onClick={() => {
            dispatch(
              setEditedSake({
                id: sake.id,
                acidity: sake.acidity,
                alcohol_degree: sake.alcohol_degree,
                brand: sake.brand,
                comment: sake.comment,
                evaluation: sake.evaluation,
                img_url: sake.img_url,
                kinds: sake.kinds,
                local: sake.local,
                polishing_degree: sake.polishing_degree,
                rice_type: sake.rice_type,
                sake_degree: sake.sake_degree,
              })
            )
          }}
        />
        <TrashIcon
          className="h-5 w-5 text-blue-500 cursor-pointer"
          onClick={() => {
            deleteSakesMutation.mutate(sake.id)
          }}
        />
      </div>
    </li>
  )
}
export const SakeItemMemo = memo(SakeItem)
