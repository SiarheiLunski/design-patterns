import React from 'react';
import { ReportData } from '../../../patterns/structural/bridge/reports';

type Props = {
  reportType: string
  generateReport(event: React.FormEvent<HTMLFormElement>): void
  handleInputChange(event: React.FormEvent<FormItemElement>): void
  formValues: ReportData
}

export type FormItemElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

export const ReportForm = ({ reportType, generateReport, handleInputChange, formValues }: Props): JSX.Element => {
  return <div>
    <h2>{reportType} report</h2>
    <form onSubmit={generateReport}>
      <div>
        <label htmlFor="first-name">First name:</label><br/>
        <input id="first-name" name="first-name" type="text" onChange={handleInputChange} value={formValues['first-name']}/>
      </div>
      <div>
        <label htmlFor="last-name">Last name:</label><br/>
        <input id="last-name" name="last-name" type="text" onChange={handleInputChange} value={formValues['last-name']}/>
      </div>
      <div>
        <label htmlFor="planned">Tasks planned:</label><br/>
        <input id="planned" name="planned" type="number" onChange={handleInputChange} value={Number(formValues.planned)}/>
      </div>
      <div>
        <label htmlFor="completed">Tasks completed:</label><br/>
        <input id="completed" name="completed" type="number" onChange={handleInputChange} value={Number(formValues.completed)}/>
      </div>
      <div>
        <label htmlFor="comment">Comments</label><br/>
        <textarea id="comment" name="comment" onChange={handleInputChange} value={formValues.comment}/>
      </div>
      <button>Generate {reportType} Report</button>
    </form>
  </div>;
};
