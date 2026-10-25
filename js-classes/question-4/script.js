// Q4: Custom Form Builder (Forms + Classes)
class FormBuilder {
  constructor(fields, container) {
    this.fields = fields;
    this.container = container;
    this.form = null;
  }

  buildForm() {
    this.form = document.createElement("form");
    this.form.id = "dynamicForm";

    this.fields.forEach((field, index) => {
      const inputId = `field-${index}`;
      const label = document.createElement("label");
      label.htmlFor = inputId;
      label.textContent = field.label;

      const input = document.createElement("input");
      input.id = inputId;
      input.name = field.name;
      input.type = field.type;
      input.required = field.required !== false;

      this.form.append(label, input);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    this.form.appendChild(submitButton);

    this.form.addEventListener("submit", event => {
      event.preventDefault();
      const formData = this.getFormData();
      document.getElementById("output").textContent = JSON.stringify(formData, null, 2);
    });

    this.container.replaceChildren(this.form);
  }

  // Return entered values as an object, keyed by each field's name.
  getFormData() {
    const data = {};
    this.fields.forEach(field => {
      data[field.name] = this.form.elements[field.name].value;
    });
    return data;
  }
}

const formFields = [
  { type: "text", name: "username", label: "Username", required: true },
  { type: "email", name: "email", label: "Email", required: true },
  { type: "password", name: "password", label: "Password", required: true }
];

const formBuilder = new FormBuilder(formFields, document.getElementById("formContainer"));
formBuilder.buildForm();
