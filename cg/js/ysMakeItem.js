const data = [];
const data2 = [];

const fn_getItemTypeData = function () {
    // check_login();
    API.getItemTypeData((resp) => {
        if (resp.success) {
            console.log(resp);
            data.length = 0; // 기존 내용을 초기화
            data.push(...resp.payload); // payload 데이터를 data에 추가
            data.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item.itype_name; // 항목 이름 사용
                div.setAttribute('data-index', item.itype_index); // 아이템 인덱스 저장
                div.onclick = () => selectItem(div);
                listBox.appendChild(div);
            });
        } else {
            console.log('fail');
        }
    });
}


function check_logout() {
    // 모든 쿠키 초기화
    document.cookie.split(";").forEach(cookie => {
        const [name] = cookie.split("=");
        document.cookie = `${name.trim()}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    });

    // 로그아웃 메시지 출력 (선택 사항)
    alert("로그아웃 되었습니다.");

    // 리다이렉트
    setTimeout(() => {
        window.location.href = "http://13.209.183.72/ys_login.html";
    }, 100); // 메시지 표시 후 약간의 지연을 추가
};


// 특정 쿠키 값만 확인하는 함수
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null; // 쿠키가 없으면 null 반환
}

///-------------------------------------------------------------------------------------------
$(document).ready(function() {
    
    // 현재 브라우저에 저장된 모든 쿠키 확인
    console.log("저장된 쿠키:", document.cookie);

    // 특정 쿠키 이름으로 값 가져오기
    const adminId = getCookie("adminId");
    if (adminId) {
        console.log("adminId 쿠키 값:", adminId);
    } else {
        // 로그아웃 메시지 출력 (선택 사항)
        alert("로그인이 필요한 서비스 입니다.");
    
        // 리다이렉트
        setTimeout(() => {
            window.location.href = "http://13.209.183.72/ys_login.html";
        }, 100); // 메시지 표시 후 약간의 지연을 추가
    }
    
    
});
