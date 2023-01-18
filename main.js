window.addEventListener("load", function() {
    
    let btn = document.getElementsByTagName("button");
    let elAnswer = this.document.getElementsByClassName("answer")

    btn[0].addEventListener('click', function(){
        elAnswer[0].style.display = "block";
    });

  });
