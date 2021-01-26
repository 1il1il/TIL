function my_search() {
    // 버튼을 누르면 호출
    let keyword = '건축학개론'
    // AJAX방식으로 서버프로그램 호출하기
    // 다음 카카오의 이미지 검색 프로그램을 이용하여 검색
    // 	c1c91e71e21bbee8cdc83ab7f30cbc51
    $.ajax({
        url : 'https://dapi.kakao.com/v2/search/image',
        type : 'GET',
        dataType : 'json',
        data : {
            query :keyword
        },
        headers : {
            Authorization : 'KakaoAK c1c91e71e21bbee8cdc83ab7f30cbc51'
        },
        success : function (img_result) {
            let img_url = img_result['documents'][0]['image_url']
            let img_tag = $('<img />').attr('src',img_url)
            $('#my_div').append(img_tag)
        },
        error : function () {
            alert('실패')
        }

    })
}