var modal = document.getElementById("myModal");
            var img = document.getElementById("myImage");
            var modalImg = document.getElementById("modalImage");
            var closeBtn = document.getElementsByClassName("close")[0];

            var images = document.getElementsByClassName("rezultati-image");

           for (let i = 0; i < images.length; i++) {

            images[i].onclick = function() {
                modal.style.display = 'block';
                modalImg.src = this.src;
            }
           }

            

            closeBtn.onclick = function () {
                modal.style.display = 'none';
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            }