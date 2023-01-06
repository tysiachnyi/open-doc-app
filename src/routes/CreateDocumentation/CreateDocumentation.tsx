import Button from "../../components/Buttons/Button";

const CreateDocumentation = () => {
  return (
    <div>
      <h1 className="text-center">Create Documentation</h1>

      <div className="p-4">
        {/* Input with label */}
        <div className="flex justify-center flex-col">
          <label htmlFor="title">Title</label>
          <input
            className="p-2 border rounded"
            type="text"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="flex justify-center flex-col">
          <label htmlFor="title">Content</label>
          <textarea
            className="p-2 border rounded"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="flex justify-center p-4">
          <Button text="Create" theme="primary" />
        </div>
      </div>
    </div>
  );
};

export default CreateDocumentation;
