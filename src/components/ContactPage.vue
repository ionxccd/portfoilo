<script setup>
    import emailjs from 'emailjs-com';
    import { onMounted } from 'vue';

    onMounted(() => {
        emailjs.init("bZa8-bVg50IOwSYVS");
    })

    function showAlert(mess, classN){
        setTimeout(function() {
            document.getElementById("alertContent").style.visibility = "hidden";
        }, 4000);
        document.getElementById("alertContent").style.visibility = "visible";
        document.getElementById("alertContent").className = classN;
        document.getElementById("alertContent").innerHTML = mess;
    }

    function sendMail(){
        var name = document.getElementById('user_name').value;
        var message = document.getElementById('message').value;
        var templateParams = {
            to_name: 'David',
            from_name: name,
            message: message
        };
        emailjs.send("service_4ui9id3","template_hnjaml8", templateParams)
        .then(function(response) {
            showAlert("Success! Email Sent", "alert alert-success");
        }, function(error) {
            showAlert("Error! Email Not Sent", "alert alert-error");
        });
    
    document.getElementById('user_name').value = "";
    document.getElementById('message').value = "";
    }    
</script>

<template>
    <div class="row justify-content-around">
        <h3 class="col-6">Contact Me</h3>
        <form class="col-6" id="emailForm">
           <input type="text" placeholder="Name" id="user_name" class="mb-3 rounded-2 p-1 w-100">
           <textarea placeholder="Message" class="p-1 rounded-2 w-100" id="message" style="height: 10rem;"></textarea>
           <button type="button" class="btn btn-secondary mt-2" 
           data-toggle="popover" data-placement="top" data-content="Content" style="width: 5rem;" @click="sendMail">Send</button>
        </form>
    </div>
</template>