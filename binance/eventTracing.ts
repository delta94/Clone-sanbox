import { trace } from "./trace";
import { CLIENT_ENTRY, CLIENT_RENDER }  from "./eventConstants";

const clientEntryTrace = trace(CLIENT_ENTRY.name);
const clientRenderTrace = trace(CLIENT_RENDER.name);

export { clientEntryTrace , clientRenderTrace };