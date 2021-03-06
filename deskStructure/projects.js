import S from "@sanity/desk-tool/structure-builder";
import EditIcon from 'part:@sanity/base/edit-icon'
import EyeIcon from 'part:@sanity/base/eye-icon'

import IframePreview from "../src/components/previews/iframe/IframePreview";
import SeoPreview from '../src/components/previews/seo/SeoPreviews'

export default S.listItem()
	.id("projects")
	.schemaType("project")
	.title("Projects")
	.child(
		S.documentTypeList("project")
			.child(documentId =>
				S.document()
					.documentId(documentId)
					.schemaType("project")
					.views([
						S.view.form().icon(EditIcon),
						// S.view
						// 	.component(IframePreview)
						// 	.icon(EyeIcon)
						// 	.title('Web Preview'),
						// S.view
						// 	.component(SeoPreview)
						// 	.icon(EyeIcon)
						// 	.title('SEO Preview'),
					])
				)
	);
