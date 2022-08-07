import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { setEditedNews, setEditedSake } from '../slices/uiSlice'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/solid'
import { useAppMutate } from '../hooks/useAppMutate'
import { Sake } from '../types/types'

interface Props {
  sakes: Sake[]
}

const SakeTable = ({ sakes }) => {
  const dispatch = useDispatch()
  const { deleteSakesMutation } = useAppMutate()

  if (deleteSakesMutation.isLoading) {
    return <p>Deleting...</p>
  }
  if (deleteSakesMutation.error) {
    return <p>Error</p>
  }
  return (
<table className="table-auto">
  <thead>
    <tr>
      <th className="px-4 py-2">ローカル</th>
      <th className="px-4 py-2">ブランド</th>
      <th className="px-4 py-2">種類</th>
      <th className="px-4 py-2">米の種類</th>
      <th className="px-4 py-2">辛さ</th>
      <th className="px-4 py-2">酸性度</th>
      <th className="px-4 py-2">米の割合</th>
      <th className="px-4 py-2">アルコール度数</th>
      <th className="px-4 py-2">コメント</th>
      <th className="px-4 py-2">評価</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">Intro to CSS</td>
      <td className="border px-4 py-2">Adam</td>
      <td className="border px-4 py-2">858</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td className="border px-4 py-2">Adam</td>
      <td className="border px-4 py-2">112</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Intro to JavaScript</td>
      <td className="border px-4 py-2">Chris</td>
      <td className="border px-4 py-2">1,280</td>
    </tr>
  </tbody>
</table>
  )
}
export const SakeTableMemo = memo(SakeTable)
