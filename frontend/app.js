const API_URL = 'http://localhost:5000';

// 1. DASHBOARD & PROFILE LOADER
async function loadDashboardData() {
    const adminName = document.getElementById('adminName');
    const profileDetail = document.getElementById('profileDetail');

    try {
        const response = await fetch(`${API_URL}/profile`);
        const data = await response.json();

        if (response.ok) {
            if (adminName) adminName.innerText = `Welcome, ${data.name}`;
            if (profileDetail) profileDetail.innerText = `${data.role} at ${data.school}`;
        }
    } catch (err) {
        console.error("Link to backend failed:", err);
    }
}

// 2. STUDENT LIST LOADER (NEW)
async function loadStudents() {
    const tableBody = document.getElementById('studentTableBody');
    if (!tableBody) return;

    try {
        const response = await fetch(`${API_URL}/students`);
        const students = await response.json();

        tableBody.innerHTML = ''; // Clear table
        students.forEach(student => {
            tableBody.innerHTML += `
                <tr class="border-b">
                    <td class="p-3 font-medium">${student.name}</td>
                    <td class="p-3 text-gray-600">${student.className}</td>
                    <td class="p-3"><span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span></td>
                </tr>`;
        });
    } catch (err) {
        console.error("Could not load students:", err);
    }
}

// 3. INITIALIZE PAGE
window.addEventListener('DOMContentLoaded', () => {
    loadDashboardData();
    loadStudents();
});

// 4. LOGOUT FUNCTION
function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html'; // Ensure this file exists!
}

