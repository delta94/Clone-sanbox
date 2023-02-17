import URI from "URI"
import goURI from "goURI"

const goInstanceURI = (path, instance) => {
    let uri = new URI(path);
    uri.setProtocol("https");
    uri.setDomain(instance);
    goURI(uri.toString());
};
    
export default goInstanceURI;