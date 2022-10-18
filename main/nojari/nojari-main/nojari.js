var qw = 1;
var isGirl = [];
var isBoy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// var girlList=["김고라니", "박고라니", "정고라니", "백고라니", "흑고라니", "생고라니", "국산고라니", "왜래고라니"];
var boyList = ["김수인", "김언수", "김건우", "김명준", "김민찬", "김진유", "도현욱", "박규현", "박상현", "이유섭", "성의근", "안우진", "양원준", "이경민", "이찬혁", "조완규", "최현호", "하건록"];
var customList = [];

//reset 버튼 클릭시 진짜냐고 붙고 확인시 리셋
$("#reset").click(function () {
    Swal.fire({
        title: '정말로 그렇게 하시겠습니까?',
        text: "다시 되돌릴 수 없습니다. 신중하세요.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '✔',
        cancelButtonText: '✖'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                text: "승인이 완료되었습니다.",
                icon: 'success'
            })
            setTimeout(() => location.reload(true), 1000)
        }
    })
});

//자리선정 버튼 클릭시 boyList에서 랜덤으로 뽑아서 td에 넣기
$("#goin").click(function () {
    Swal.fire({
        title: '정말로 그렇게 하시겠습니까?',
        text: "다시 되돌릴 수 없습니다. 신중하세요.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '✔',
        cancelButtonText: '✖'
    }).then((result) => {
        // Toast.fire({
        //     text: "승인이 완료되었습니다.",
        //     icon: 'success'
        if (result.isConfirmed) {
            if (result.isConfirmed) {
                var myVar = setInterval(function () {
                    var random = Math.floor(Math.random() * boyList.length);
                    $("#td" + qw).text(boyList[random]);
                    boyList.splice(random, 1);
                    qw++;
                    if (qw > 19) {
                        Toast.fire({
                            text: "승인이 완료되었습니다.",
                            icon: 'success'
                        })
                        clearInterval(myVar);
                    }
                }, 500);
            }
        }
    })
});

$(function () {
    $("#shot").on("click", function () {
        // 캡쳐 라이브러리를 통해서 canvas 오브젝트를 받고 이미지 파일로 리턴한다.
        html2canvas(document.querySelector("#capture")).then(canvas => {
            saveAs(canvas.toDataURL('image/png'), "capture-clenn.png");
        });
    });

    function saveAs(uri, filename) {
        // 캡쳐된 파일을 이미지 파일로 내보낸다.
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            link.href = uri;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(uri);
        }
    }
});