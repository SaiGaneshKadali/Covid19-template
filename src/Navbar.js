import React from 'react';
import { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { BiCalendar } from 'react-icons/bi';



function Navbar() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [diagnosedCovid, setDiagnosedCovid] = useState('no');
  const [symptoms, setSymptoms] = useState([]);
  const [formData, setFormData] = useState(null);


  const firstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const dobChange = (event) => {
    setDobMonth(event.target.value);
  };
  const dayChange = (event) => {
    setDobDay(event.target.value);
  };
  const yearChange = (event) => {
    setDobYear(event.target.value);
  };
  const diagnosedChange = (event) => {
    setDiagnosedCovid(event.target.value);
  };
  const symptomsChange = (event) => {
    setSymptoms(event.target.value);
    const value = event.target.value;
    if (symptoms.includes(value)) {
      setSymptoms(symptoms.filter((i) => i !== value));
    } else {
      setSymptoms([...symptoms, value]);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form validations here
    const data = {
      firstName,
      lastName,
      dobMonth,
      dobDay,
      dobYear,
      diagnosedCovid,
      symptoms,
    };
    setFormData(data);
    return false;
  };

  return (
    <>
      <div className="navbar">
        <img src="https://assets-global.website-files.com/5e84fbb7a2e28dc5497c62f3/5f89c453ab7da01bba858ae2_element-formstack-dark-logo.svg" height="26" width="154" alt="" class="nav-logo" />
        <div className="navbar__links">
          <a href="/" className='nav-a'>Products</a>
          <a href="/" className='nav-a'>Solutions</a>
          <a href="/" className='nav-a'>Integrations</a>
          <a href="/" className='nav-a'>Resources</a>
          <a href="/" className='nav-a'>Pricing</a>
        </div>
        <div className="navbar__actions">
          <a href="/" className='nav-a'><i className="fas fa-search"></i></a>
          <a href="/" className='nav-a'>Login</a>
          <button>Start your free trial</button>
        </div>
      </div>
      <div className='template'>
        <div className='temp'>
          <h5 style={{ color: 'green' }}>TEMPLATES</h5>
          <h1><strong>COVID-19 Vaccine<br /> Registration Form<br /> Template</strong></h1>
          <p>Use this registration template to create an efficient<br /> COVID-19 vaccine distribution workflow that makes it<br /> easy for patients to register for their<br /> doses.</p>
          <button className='temp_btn'>Get This Template</button>
        </div>
        <div className='bg-image'>
          <div className='box'>
            <form className='register-form' onSubmit={handleSubmit}>
              <h5>AvionHealth</h5>
              <p className='covid'>COVID-19 Vaccine Registration Form</p>
              Name<br />
              <input type="text" id="firstName" name="firstName" required placeholder="First Name" value={firstName} onChange={firstNameChange} />
              <input type="text" id="lastName" name="lastName" required placeholder="Last Name" value={lastName} onChange={lastNameChange} /><br /><br />
              Date of Birth<br />
              <input type="number" id="dobMonth" name="dobMonth" placeholder="Month" required value={dobMonth} onChange={dobChange} />
              <input type="number" id="dobDay" name="dobDay" placeholder="Day" required value={dobDay} onChange={dayChange} />
              <input type="number" id="dobYear" name="dobYear" placeholder="Year" required value={dobYear} onChange={yearChange} />
              <BiCalendar className="form-icon" />
              <p className='covid'>Medical History</p>
              <p style={{ 'margin-bottom': '3px', 'font-size': '16px' }}>Have you been diagnosed with COVID-19?</p>
              <input type="radio" id="yesDiagnosedCovid" name="diagnosedCovid" value="Yes" checked={diagnosedCovid === "Yes"}
                onChange={diagnosedChange} />
              Yes
              <input type="radio" id="noDiagnosedCovid" name="diagnosedCovid" value="No" checked={diagnosedCovid === "No"}
                onChange={diagnosedChange} />
              No
              <p style={{ 'margin-bottom': '3px', 'font-size': '16px', 'margin-top': '5px' }}>Please check all symptoms that apply:</p>
              <input type="checkbox" id="tasteSmell" name="symptoms" value="tasteSmell" checked={symptoms.includes("tasteSmell")}
                onChange={symptomsChange} />
              Loss of taste/smell
              <input type="checkbox" id="difficultyBreathing" name="symptoms" value="difficultyBreathing" checked={symptoms.includes("difficultyBreathing")}
                onChange={symptomsChange} />
              Difficulty breathing
              <input type="checkbox" id="cough" name="symptoms" value="cough" checked={symptoms.includes("cough")}
                onChange={symptomsChange} />
              Cough
              <input type="checkbox" id="runnyNose" name="symptoms" value="runnyNose" checked={symptoms.includes("runnyNose")}
                onChange={symptomsChange} />
              Runny nose<br />
              <input type="checkbox" id="bodyAches" name="symptoms" value="bodyAches" checked={symptoms.includes("bodyAches")}
                onChange={symptomsChange} />
              Body aches
              <input type="checkbox" id="soreThroat" name="symptoms" value="soreThroat" checked={symptoms.includes("soreThroat")}
                onChange={symptomsChange} />
              Sore throat<br />
              <input type="submit" value="Submit" id="submit" />

            </form>
          </div>
        </div>
      </div>
      <div className='text1'>
        <div className='container_1'>
          <h4><b>Simplify your workflows</b></h4>
          <p>Trying to rapidly launch an efficient and streamlined COVID-19 vaccination distribution process? Use this vaccine registration form to easily and securely gather patient data and add them to your vaccination queue. Eliminate tedious, error-prone, and time-consuming paper forms by digitizing your entire vaccination workflow. Here is additional information on setting up a <a href="https://www.formstack.com/resources/blog-covid-19-vaccine-workflow-form-templates"><b>vaccine registration process workflow</b></a>.</p>        </div>
      </div>
      <div className='container_2'>
        <div className='text_1'>
          <img loading="lazy" src="https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/5f441dff4c1b3b067fd033b1_pci-compliant.svg" alt="" class="mb-20" />
          <h3 className='secure'><b>Securely collect data</b></h3>
          <p>Provide front office workers, care teams, and back office staff a form solution they can rely on. Securely collect data with Formstack’s <a href="https://www.formstack.com/features/hipaa-compliant-forms">HIPAA-friendly features</a> that include encryption, audit logging, and user-level permissions. Protect patient information while keeping your facility’s data secure from external threats.</p>
        </div>
        <div className='text_3'>
          <img src='	https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/5f6381199ce5f8d708a500ab_plug-2.svg' alt='plug' />
          <h5 className='integrate'><b>Easily set up integrations</b></h5>

          <p>Use Formstack’s <a href="https://www.formstack.com/integrations?integration-categories=healthcare-hipaa">secure integrations</a> to easily connect your vaccine registration forms to the tools your team uses every day. Add Google Calendar to this form template to allow patients to quickly book vaccine appointments, or use Formstack’s <a href="https://www.formstack.com/features/forms-api-webhooks">open API and webhooks</a> to build connections between your forms and most-used apps.&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <div className='text_2'>
          <img loading="lazy" src="https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/5f3aa13a5cc00880ad9cce58_esign.svg" alt="" class="mb-20" />
          <h3 className='experience'><b>Create a contactless experience</b></h3>
          <p>Keep patients safe with<strong> </strong>a contactless experience. Easily embed this registration form on your website, share with patients via email, or collect data using an in-office tablet. Formstack’s <a href="https://www.formstack.com/features/mobile-friendly">mobile-optimized forms</a> make it easy to collect data from any device, enabling patients to submit their information from home, while waiting in the car, or on a kiosk.</p>
        </div>
        <div className='text_4'>
          <img loading="lazy" src="https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/5f3abf256899a47bf24b5390_conditional-logic.svg" alt="" class="mb-20" />
          <h5 className='optimize'><b>Optimize your workflow</b></h5>
          <p>This vaccine registration form template is completely customizable to meet the needs of your organization and workflow. Any staff member can make changes in minutes using Formstack’s drag-and-drop form builder. Combine this form with our <a href="https://www.formstack.com/products/documents">Documents</a> and <a href="https://www.formstack.com/products/sign">Sign</a> products to create an efficient, flexible, and secure vaccine distribution workflow.</p>
        </div>

      </div>
      <div className='quote-section'>
        <div className='quote-container'>
          <div style={{ backgroundImage: 'none', textAlign: 'center' }} className='block-quote'>
            <img src="https://assets-global.website-files.com/5ebb0930dd82631397ddca92/5eff9fe3e68b4f3b68ff86b8_Quote%20Marks.svg" alt="" class="quote-quotes-icon" />
            <div className='quote-text'>
              <p>Formstack allows us to capture the data we
                need for regulatory bodies and to make sure
                patients are screened appropriately. Since
                launch, we’ve been at full capacity. Formstack
                has been a fantastic tool to help us get this off
                the ground.</p>
            </div>
            <img src="https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/614dec165bf6cf6325f963d4_sarah-galyon.jpeg" alt="" className="quote-author-image"></img>
            <div className='quote-author-text'>
              <h3 className='author'>Sarah Galyon</h3>
              <p>Operations Manager at UT Medical Center</p>
            </div>
          </div>
        </div>
      </div>
      {formData && (
        <div>
          <h2>Form Data</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Month : {formData.dobMonth}</p>
          <p>Day : {formData.dobDay}</p>
          <p>Year: {formData.dobYear}</p>
          <p>Daignosed Covid:{formData.diagnosedCovid}</p>
          <p>Symptoms: {formData.symptoms.join(", ")}</p>
        </div>
      )}
      <div className='container-3'>
        <div className='orange-temp'>
          {/* <img src='https://assets-global.website-files.com/5eff9c5e4dba181f8aa2d1e0/5f3c5472283c8474eefb652c_Forms.svg' alt='orange-temp'/> */}
        </div>
        <div className="ready-template-orange">
          <h3 className="ready" style={{ fontSize: '25px' }}><strong>Ready to get started with this template?</strong></h3><br></br>
          <div className='ready' style={{ fontSize: '18px' }}>Click the button below to add this template to your account. If you do not have an account, you can sign up for a free trial to start using<br></br> this template.</div>
          <button className='temp-btn-2'>Get This Template</button></div>
      </div>





    </>
  )
}


export default Navbar;
