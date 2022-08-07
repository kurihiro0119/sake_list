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
    <li className="my-3 p-10" >
      <span className="font-bold">{sake.local} </span>
      <span className="font-bold">{sake.brand} </span>
      <span className="font-bold">{sake.kinds} </span>
      <span className="font-bold">{sake.rice_type} </span>
      <span className="font-bold">{sake.sake_degree} </span>
      <span className="font-bold">{sake.polishing_degree} </span>
      <span className="font-bold">{sake.alcohol_degree} </span>
      <span className="font-bold">{sake.comment} </span>
      <span className="font-bold">{sake.evaluation}</span>
    </li>
  )
}
export const SakeItemMemo = memo(SakeItem)
