import checkboxFilled from "../../../../assets/checkbox_filled.svg";
import checkboxEmpty from "../../../../assets/checkbox_empty.svg";
import dump from "../../../../assets/dump.svg";
import { DefaultTable, TasksContainer } from "./styles";

export function Tasks() {
    return (
        <TasksContainer>
            <table>
                <tbody>
                    <DefaultTable>
                        <td>
                            <img src={checkboxFilled} alt="" />
                            Integer urna interdum massa libero auctor neque
                            turpis turpis semper. Duis vel sed fames integer.
                            <img src={dump} alt="" />
                        </td>
                        <td>
                            <img src={checkboxFilled} alt="" />
                            Integer urna interdum massa libero auctor neque
                            turpis turpis semper. Duis vel sed fames integer.
                            <img src={dump} alt="" />
                        </td>
                        <td>
                            <img src={checkboxEmpty} alt="" />
                            Integer urna interdum massa libero auctor neque
                            turpis turpis semper. Duis vel sed fames integer.
                            <img src={dump} alt="" />
                        </td>
                        <td>
                            <img src={checkboxEmpty} alt="" />
                            Integer urna interdum massa libero auctor neque
                            turpis turpis semper. Duis vel sed fames integer.
                            <img src={dump} alt="" />
                        </td>
                    </DefaultTable>
                </tbody>
            </table>
        </TasksContainer>
    );
}
