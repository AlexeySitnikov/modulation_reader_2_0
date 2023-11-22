import { useRows } from '../CustomHooks/useRows'
import { SingleRow } from '../ListOfStrings/SingleRow'
import { Modal } from '../Modal/Modal'
import { useModalWindow } from '../CustomHooks/useModalWindow'

export function Main({ selectedFile }) {
  const {
    arrayOfStrings, setChecked, onClickCheckAllRows, onDeleteButtonHandler,
  } = useRows({ selectedFile })

  const {
    isModalOpen, content, closeModalClickHandler, openModalClickHandler,
  } = useModalWindow({ arrayOfStrings })

  return (
    <div>
      <Modal isOpen={isModalOpen} closeModal={closeModalClickHandler}>
        {content}
      </Modal>

      <div>
        <input type="checkbox" id="checkAllRows" onClick={onClickCheckAllRows} />
        <span>Check all rows</span>
      </div>

      <div>
        <button type="button" onClick={openModalClickHandler} id="CST">
          Get modulation for CST
        </button>
        <button type="button" onClick={openModalClickHandler} id="points">
          Get modulation by points
        </button>
      </div>

      <button type="button" onClick={onDeleteButtonHandler}>Delete checked</button>

      {arrayOfStrings.map((row) => (
        <SingleRow key={crypto.randomUUID()} row={row} setChecked={setChecked} />
      ))}

    </div>
  )
}
