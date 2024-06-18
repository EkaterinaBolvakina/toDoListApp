import {useState, useRef} from "react";

interface ITaskProps {
    title: string;
    toDelete: () => void;
}

const Task = ({ title, toDelete }: ITaskProps) => {

    const [isEdit, setIsEdit] = useState<boolean | undefined>(false); // [isEdit, setIsEdit] Array(2)

    const [updatedTask, setUpdatedTask] = useState<string>(title);

    const textId = useRef<HTMLTextAreaElement>(null); // 1.Step: abstrakte reference definieren chrome://settings/search und diese kann man einem bestimmten element zuweisen

    const handClickSave = () => {
        setUpdatedTask(textId.current!.value);
        setIsEdit(false);
    }

    if (isEdit) {
        return (
            <>
                {/* 2.Step: abstrakte reference dem element textarea zuweisen: */}
                <div className="card" style={{ width: '580px', margin: '8px auto' }}>
                    <div className="card-body">
                        <textarea className="card-title" style={{ width: '480px', margin: '2px 1px 8px 1px' }} ref={textId} defaultValue={updatedTask}></textarea>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                            <button type="button" className="btn btn-secondary" data-bs-toggle="button" aria-pressed="true" onClick={handClickSave}>Save</button>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="card" style={{ width: '580px', margin: '8px auto', backgroundColor: 'rgba(var(--bs-tertiary-bg-rgb)' }}>
                <div className="card-body">
                    <h4 className="card-title" style={{ margin: '2px 1px 8px 1px' }}>{updatedTask}</h4>
                    <div style={{ margin: '28px 1px 1px 1px' }} className="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button type="button" className="btn btn-secondary" data-bs-toggle="button" aria-pressed="true" onClick={() => setIsEdit(true)}>Edit</button>
                        <button type="button" className="btn active" data-bs-toggle="button" aria-pressed="true" onClick={toDelete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

  export default Task;