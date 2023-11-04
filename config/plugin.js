// plugins.js
module.exports = () => ({
  tinymce: {
      enabled: true,
      config: {
          editor: {
              outputFormat: "html",
              editorConfig: {
                  language: "sk",
                  height: 300,
                  menubar: true,
                  extended_valid_elements: "span, small",
                  forced_root_block: "",
                  convert_urls: true,
                  entity_encoding: "raw",
                  plugins:
                      "advlist autolink lists link image charmap preview anchor \
                      searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                      insertdatetime media table code help wordcount",
                  toolbar:
                      "undo redo | styles | bold italic forecolor backcolor | \
                      alignleft aligncenter alignright alignjustify | \
                      media table emoticons visualblocks code|\
                      nonbreaking bullist numlist outdent indent | removeformat | help",
                  style_formats: [
                      {
                          title: "Headings",
                          items: [
                              { title: "h1", block: "h1" },
                              { title: "h2", block: "h2" },
                              { title: "h3", block: "h3" },
                              { title: "h4", block: "h4" },
                              { title: "h5", block: "h5" },
                          ],
                      },

                      {
                          title: "Text",
                          items: [
                              { title: "Paragraph", block: "p" },
                              {
                                  title: "Paragraph with small letters",
                                  block: "small",
                              },
                          ],
                      },
                  ],
              },
          },
      },
  },
});