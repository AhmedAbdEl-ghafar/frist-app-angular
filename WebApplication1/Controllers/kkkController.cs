using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class kkkController : Controller
    {

        private static string[] emp = new[]
        {
            "ahmed abd elghafar", "alaa", "ahmed", "ayman","ali"
        };

        private static string[][] ahmedopr = new string[][]
        { new string [] {"ahmed","ahmed","1","2" }
            
        };

        //private static int[] ids = new[]
        //{
        //    1, 2, 3, 4
        //};

        [HttpGet("[action]")]
        public IEnumerable<desemp> allemp()
        {

            var rng = new Random();
            return Enumerable.Range(1, 4).Select(index => new desemp
            {
                
                ids = index,
                name = emp[rng.Next(emp.Length)]

            });
        }

        [HttpGet("[action]")]
        public IEnumerable<opropr> disopr()
        {

            var rng = new Random();
            return Enumerable.Range(1, ahmedopr.Length).Select(index => new opropr
            {

                opr1 = opropr[rng.Next],
                opr2 = "ahmed",
                opr3 = "1",
                opr4 = "2" 

            });
        }
        public class desemp
        {
            public int ids { get; set; }
            public string name { get; set; }
            
        }

        [HttpPost("[action]")]
        public ActionResult save(EMP ent )
        {
            return Ok(new { alaa="asdasd"});
        }



        [HttpPost("[action]")]
        public ActionResult opr (opropr eeee)
        {
            return Ok(new { ahmed="Good" });

        }
    }

   public class EMP
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public class opropr
    {
        public string opr1 { get; set; }
        public string opr2 { get; set; }
        public string opr3 { get; set; }
        public string opr4 { get; set; }
    }
}