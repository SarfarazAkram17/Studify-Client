import React from "react";

const Faq = () => {
  return (
    <div className="my-20">
      <h1 className="mb-12 text-center text-4xl md:text-5xl font-bold">
        Frequently Asked Questions
      </h1>

      {/* Question 1 */}
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title font-semibold">
          What is the purpose of this group study platform?
        </div>
        <div className="collapse-content text-sm">
          This platform allows users to create, submit, and evaluate assignments
          collaboratively in an online group study environment.
        </div>
      </div>

      {/* Question 2 */}
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          Who can create and submit assignments?
        </div>
        <div className="collapse-content text-sm">
          Any registered and logged-in user can create assignments and submit
          their work using a Google Docs link along with notes.
        </div>
      </div>

      {/* Question 3 */}
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          How are assignments evaluated?
        </div>
        <div className="collapse-content text-sm">
          Users can evaluate others’ submitted assignments by assigning marks
          and giving feedback. Evaluated assignments are marked as completed.
        </div>
      </div>

      {/* Question 4 */}
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          Can I update or delete my assignments?
        </div>
        <div className="collapse-content text-sm">
          Yes. Only the creator of an assignment can update or delete it to
          ensure control over their content.
        </div>
      </div>

      {/* Question 5 */}
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          Is my data secure on this platform?
        </div>
        <div className="collapse-content text-sm">
          Yes, your data is secure. We use Firebase Authentication and
          accessToken-based authorization to protect API routes. Sensitive
          information such as Firebase config and MongoDB credentials is kept
          safe using environment variables. All authenticated requests are
          verified on the server using the Firebase Admin SDK.
        </div>
      </div>

      {/* Question 6 */}
      <div className="collapse collapse-arrow bg-base-200 border border-base-300 mb-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          Is the platform responsive and mobile-friendly?
        </div>
        <div className="collapse-content text-sm">
          Absolutely. The entire system is designed to be fully responsive and
          works seamlessly across desktop, tablet, and mobile devices.
        </div>
      </div>
    </div>
  );
};

export default Faq;
