import Heading from "./Components/Heading";
import General from "./Components/General/General";
import Addresses from "./Components/Addresses/Addresses";
function AboutCompany() {
    return (
        <div>
            <Heading/> {/* Заголовок и кнопка справа */}
            <div className='d-flex flex-row mt-5'>
                <div className='<col flex-grow-1'>
                <General/>  {/* Основная информация вроде названия, типа и телефона */}
                </div>
                <div className='col flex-grow-1 style'>
                <Addresses/> {/* Список доступных адресов заведений */}
                </div>
            </div>
        </div>
    );
}

export default AboutCompany;