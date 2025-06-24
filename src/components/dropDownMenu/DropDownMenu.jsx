import './dropDownMenu.css'



export default function DropDownMenu({ datas, name }) {

    return (

        <select name={name} id="state" className='drop-down-menu'>
            {datas.map((el, index) =>
                <option key={index}>
                    {el.name}
                </option>
            )}
        </select>

    )
}