<template>
    <form @submit.prevent="submitAppointment">
        <input v-model="form.notes" placeholder="Notes" required />
        <input v-model="form.status" type="checkbox" /> Status
        <input v-model="form.appointment_date" type="date" required />
        <input v-model="form.user_id" type="number" placeholder="Doctor ID" required />
        <input v-model="form.patient_id" type="number" placeholder="Patient ID" required />
        <button type="submit">Book Appointment</button>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                notes: '',
                status: false,
                appointment_date: '',
                user_id: null,
                patient_id: null,
            },
        };
    },
    methods: {
        async submitAppointment() {
            try {
                await axios.post('http://localhost:3000/appointments/create', this.form);
                alert('Appointment booked successfully');
            } catch (err) {
                console.error(err);
            }
        },
    },
};
</script>