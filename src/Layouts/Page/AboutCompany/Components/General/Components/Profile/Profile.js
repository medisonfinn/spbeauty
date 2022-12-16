import Avatar from "./Avatar";
import styled from 'styled-components';

const GreyText = styled.div`
color: #64748B;
`;

function Profile() {
    return (
        <div className='d-inline-flex flex-row'>
            <Avatar/>
            <div className='ms-3 d-inline-flex flex-column justify-content-center'>
                <div className='title mb-2'>SPBEAUTY</div>
                <GreyText className='mb-1 color: #white'>Салон красоты</GreyText>
                <GreyText>Санкт-Петербург, Невский пр-т. 28</GreyText>
            </div>                  
        </div>
    );
}

export default Profile;