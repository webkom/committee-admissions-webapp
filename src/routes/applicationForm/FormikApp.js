import { withFormik } from "formik";
import Yup from "yup";

import ApplicationFormContainer from "./ApplicationFormContainer";

const FormikApp = withFormik({
  mapPropsToValues() {
    return {
      webkom: "",
      fagkom: "",
      bedkom: "",
      readme: "",
      labamba: "",
      koskom: "",
      arrkom: "",
      pr: ""
    };
  },
  handleSubmit(
    values,
    {
      props: { selectedCommittees, apiRoot },
      resetForm,
      setSubmitting,
      setFieldValue
    }
  ) {
    var submission = {};
    Object.keys(values)
      .filter(committee => selectedCommittees[committee])
      .forEach(name => {
        submission[name] = values[name];
      });

    fetch(`${apiRoot}/api/application/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submission)
    })
      .then(res => {
        console.log("Submit result", res);
        resetForm();
        setSubmitting(false);
        return res;
      })
      .catch(err => console.log(err));
  },
  validationSchema: props => {
    return Yup.lazy(values => {
      var selectedCommittees = Object.keys(values).filter(
        committee => props.selectedCommittees[committee]
      );
      const schema = {};
      selectedCommittees.forEach(name => {
        schema[name] = Yup.string()
          .min(20, "Det var da litt kort? 20 bokstaver klarer du iallefall :)")
          .required("Søknadsteksten kan ikke være tom!");
      });
      return Yup.object().shape(schema);
    });
  },
  displayName: "ApplicationForm",
  validateOnChange: true
})(ApplicationFormContainer);

export default FormikApp;
