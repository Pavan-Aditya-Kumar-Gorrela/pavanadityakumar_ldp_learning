import { useState } from "react";

export default function Index() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        age: "",
        acceptedTerms: false,
    });

    return (
        <>
            <input
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                    setForm({
                        ...form,
                        name: e.target.value,
                    })
                }
            />

            <input
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                    setForm({
                        ...form,
                        email: e.target.value,
                    })
                }
            />

            <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) =>
                    setForm({
                        ...form,
                        phone: e.target.value,
                    })
                }
            />

            <select
                value={form.course}
                onChange={(e) =>
                    setForm({
                        ...form,
                        course: e.target.value,
                    })
                }
            >
                <option value="">Select a course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
            </select>

            <input
                placeholder="Age"
                value={form.age}
                onChange={(e) =>
                    setForm({
                        ...form,
                        age: e.target.value,
                    })
                }
            />

            <label>
                <input
                    type="checkbox"
                    checked={form.acceptedTerms}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            acceptedTerms: e.target.checked,
                        })
                    }
                />
                I accept the terms and conditions
            </label>

            <pre>
                {JSON.stringify(form,null,2)}
            </pre>
        </>
    );
}