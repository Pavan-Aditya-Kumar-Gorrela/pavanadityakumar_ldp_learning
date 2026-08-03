import { useEffect, useState } from "react";
import {
  Card,
  Button,
  Stack,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
} from "@mui/material";

interface Student {
  id: number;
  name: string;
  age: number;
  major: string;
}

const API_URL = "http://localhost:3001/students";

export default function StudentApp() {
  const [students, setStudents] = useState<Student[]>([]);
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const emptyStudent = {
    id: 0,
    name: "",
    age: 0,
    major: "",
  };

  const [formData, setFormData] = useState<Student>(emptyStudent);


  

  useEffect(() => {
    const fetchStudents = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }
      console.log(response)
     
      
      const data = await response.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
    }
  };
    fetchStudents();
  }, []);

  
  const handleAdd = () => {
    setIsEdit(false);
    setFormData(emptyStudent);
    setOpen(true);
  };


  const handleEdit = (student: Student) => {
    setIsEdit(true);
    setFormData(student);
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
    setFormData(emptyStudent);
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };


  const addStudent = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          age: formData.age,
          major: formData.major,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      const newStudent = await response.json();

      setStudents((prev) => [...prev, newStudent]);

      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  
  const updateStudent = async () => {
    try {
      const response = await fetch(`${API_URL}/${formData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update student");
      }

      const updatedStudent = await response.json();

      setStudents((prev) =>
        prev.map((student) =>
          student.id === updatedStudent.id ? updatedStudent : student
        )
      );

      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteStudent = async (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }

      setStudents((prev) => prev.filter((student) => student.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  
  const handleSave = () => {
    if (
      formData.name.trim() === "" ||
      formData.major.trim() === "" ||
      formData.age <= 0
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (isEdit) {
      updateStudent();
    } else {
      addStudent();
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Student Management System (with fetch)
        </Typography>

        <Button
          variant="contained"
          color="success"
          onClick={handleAdd}
          sx={{ mb: 3 }}
        >
          Add Student
        </Button>

        <Stack spacing={2}>
          {students.map((student) => (
            <Card key={student.id} sx={{ p: 2 }}>
              <Typography variant="h6">{student.name}</Typography>

              <Typography>Age : {student.age}</Typography>

              <Typography>Major : {student.major}</Typography>

              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  sx={{ mr: 2 }}
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </Button>
              </Box>
            </Card>
          ))}
        </Stack>
      </Card>

      {/* Dialog */}

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          {isEdit ? "Edit Student" : "Add Student"}
        </DialogTitle>

        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            label="Age"
            name="age"
            type="number"
            fullWidth
            value={formData.age || ""}
            onChange={handleChange}
          />

          <TextField
            margin="dense"
            label="Major"
            name="major"
            fullWidth
            value={formData.major}
            onChange={handleChange}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          <Button variant="contained" onClick={handleSave}>
            {isEdit ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}