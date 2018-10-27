import ReactDOM from 'react-dom';

const insertStyles = () => {
	const projectName = Cypress.config('projectName');
	const appIframeId = `Your App: '${projectName}'`;

	const parentDocument = window.parent.document;
	const appIframe = parentDocument.getElementById(appIframeId);
	const head = appIframe.contentDocument.querySelector('head');

	const styles = document.querySelectorAll('head style');

	Array.from(styles).forEach(style => {
		if (style) {
			head.appendChild(style);
		}
	});
};

function renderer(jsx) {
	const containerAttrName = 'root-test-container';
	const document = cy.state('document');
	const root = document.createElement('div');

	document.body.innerHTML = '';

	root.setAttribute('data-test-react-mount', containerAttrName);

	let jsxRenderer;

	return Promise.resolve().then(() => {
		jsxRenderer = ReactDOM.render(jsx, root);
		Cypress._jsx = () => cy.then(() => jsxRenderer);

		document.body.append(root);
	});
}

export default function mountComponent(jsx) {
	cy.window({ log: false })
		.then(() => renderer(jsx))
		.then(insertStyles);
}
