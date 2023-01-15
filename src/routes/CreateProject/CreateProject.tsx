import { useState } from "react";
import Button from "../../components/Buttons/Button";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "front_end",
  });

  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });

  const handleCreateProject = () => {
    setErrors({ title: false, description: false });

    if (!formData.title && !formData.description) {
      setErrors({ title: true, description: true });
      return;
    }

    if (!formData.title) {
      setErrors({ ...errors, title: true });
    }
    if (!formData.description) {
      setErrors({ ...errors, description: true });
    }

    if (formData.title && formData.description) {
      console.log("Create project");
    }
  };

  return (
    <div>
      <h1 className="text-center">Create Project</h1>

      <div className="p-4">
        {/* Input with label */}
        <div className="flex justify-center flex-col">
          <div className="flex justify-between">
            <label htmlFor="title">Title</label>
            {errors.title && (
              <p className="text-center text-red-500">Title is required</p>
            )}
          </div>

          <input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className={
              errors.title
                ? "p-2 border border-red-500 rounded"
                : "p-2 border rounded"
            }
            type="text"
            id="title"
            placeholder="Title"
          />

          <div className="flex justify-between">
            <label htmlFor="title">Description</label>
            {errors.description && (
              <p className="text-center text-red-500">
                Description is required
              </p>
            )}
          </div>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className={
              errors.description
                ? "p-2 border border-red-500 rounded"
                : "p-2 border rounded"
            }
            id="title"
            placeholder="Title"
          />

          <label htmlFor="title">Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="p-2 border rounded"
            id="title"
            placeholder="Title"
          >
            <option value="front_end">Front-End</option>
            <option value="back_end">Back-End</option>
          </select>
        </div>
        <div className="flex justify-center p-4">
          <Button text="Create" theme="primary" onClick={handleCreateProject} />
        </div>
      </div>
    </div>
  );
};
export default CreateProject;
