import { MentionsInput, Mention } from "react-mentions";
import { useState } from "react";

const users = [
    {
        id: 'jose',
        display: 'Jose'

    },
    {
        id: 'migue',
        display: 'Miguel'

    },
    {
        id: 'basi',
        display: 'Basilio'

    }
]
const Mentions = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <MentionsInput 
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Menciona al usuario con el que quieras contactar usando '@"}
            a11ySuggestionsListLabel={"Menciona aqui"}>
                <Mention data={users} />
            </MentionsInput>
        </div>
    )
}
export default Mentions;