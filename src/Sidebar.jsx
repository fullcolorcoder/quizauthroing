import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-css/fieldlabel/dist/index.css';

const Sidebar = ({ addQuestion, exportData }) => {

    return (
        // <aside className="spectrum-Site-sideBar">
        <aside className="">
            <div className="heading">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 30 26" width="36px" xmlSpace="preserve" aria-hidden="true"> <path fill="#FA0F00" d="M19 0h11v26zM11.1 0H0v26zM15 9.6L22.1 26h-4.6l-2.1-5.2h-5.2z"></path> </svg>
                <h1 className="spectrum-Heading spectrum-Heading--sizeXS">Quiz Authoring Tool</h1>
            </div>

            <sp-accordion>
                <sp-accordion-item label="Heading 1">
                    <div>Item 1</div>
                </sp-accordion-item>
                <sp-accordion-item disabled label="Heading 2">
                    <div>Item 2</div>
                </sp-accordion-item>
                <sp-accordion-item label="Heading 3">
                    <div>Item 3</div>
                </sp-accordion-item>
                <sp-accordion-item label="Heading 4">
                    <div>Item 4</div>
                </sp-accordion-item>
                <sp-accordion-item label="Heading 5">
                    <div>Item 5</div>
                </sp-accordion-item>
                <sp-accordion-item label="Heading 6">
                    <div>Item 6</div>
                </sp-accordion-item>
            </sp-accordion>

            <button className="spectrum-Button spectrum-Button--fill spectrum-Button--primary spectrum-Button--sizeS" onClick={addQuestion}>
                <span className="spectrum-Button-label">Add Question</span>
            </button>

            <button className="spectrum-Button spectrum-Button--fill spectrum-Button--primary spectrum-Button--sizeS" onClick={exportData}>
                <span className="spectrum-Button-label">Export Quiz</span>
            </button>

        </aside>
    )
};
export default Sidebar