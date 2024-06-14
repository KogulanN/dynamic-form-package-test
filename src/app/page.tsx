'use client'
import React from 'react';
import { DynamicForm } from 'dynamic-form-package';

const questions = [
  {
    "question_id": "q1",
    "type": "text",
    "label": "What is your name?",
    "mandatory": true,
    "placeholder": "Enter your name"
  },
  {
    "question_id": "q2",
    "type": "select",
    "label": "What is your gender?",
    "mandatory": true,
    "options": ["Male", "Female", "Other"]
  },
  {
    "question_id": "q3",
    "type": "date",
    "label": "Date of Birth",
    "mandatory": true
  },
  {
    "question_id": "q4",
    "type": "checkbox",
    "label": "Do you agree to the terms and conditions?",
    "mandatory": true
  }
];

const businessRules = [
  {
    "rule_id": "r1",
    "type": "mandatory",
    "question_id": "q1",
    "error_message": "Name is required"
  },
  {
    "rule_id": "r2",
    "type": "regex",
    "question_id": "q1",
    "pattern": "^[A-Za-z ]+$",
    "error_message": "Name must contain only letters and spaces"
  },
  {
    "rule_id": "r3",
    "type": "conditional",
    "condition": {
      "question_id": "q2",
      "value": "Other"
    },
    "action": {
      "show": "q5"
    }
  }
];

const layout = {
  "layout": [
    {
      "section_id": "s1",
      "section_title": "Personal Information",
      "rows": [
        {
          "row_id": "r1",
          "questions": ["q1", "q2"]
        },
        {
          "row_id": "r2",
          "questions": ["q3"]
        }
      ]
    },
    {
      "section_id": "s2",
      "section_title": "Consent",
      "rows": [
        {
          "row_id": "r3",
          "questions": ["q4"]
        }
      ]
    }
  ]
};

const App: React.FC = () => {
  return (
    <div>
      <h1>My Dynamic Form</h1>
      <DynamicForm questions={questions} businessRules={businessRules} layout={layout} />
    </div>
  );
};

export default App;
