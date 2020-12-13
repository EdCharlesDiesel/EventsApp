using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AppData.Controllers
{
    public class EventController : ApiController
    {
        public JToken Get(string id = null)
        {
            if (id == null)
                return GetAllJsonEventsAsArray();
            return GetSingleJsonFile(id);
        }

        private static JToken GetSingleJsonFile(string id)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(System.IO.File.ReadAllText(path + "../app/data/event/" + id + ".json"));
        }

        public void Post(string id, JObject eventData)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            System.IO.File.WriteAllText(path + "../app/data/event/" + id + ".json", eventData.ToString(Formatting.None));
        }

        private JArray GetAllJsonEventsAsArray()
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            var contents = "";
            foreach (var file in System.IO.Directory.GetFiles(path + "../app/data/event/"))
            {
                contents += System.IO.File.ReadAllText(file) + ",";
            }
            return JArray.Parse("[" + contents.Substring(0, contents.Length - 1) + "]");
        }

    }
}