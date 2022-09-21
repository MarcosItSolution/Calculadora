using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TesteTecnico.Controllers.Models
{
    public class ConteudoModel
    {
        public int numero1 { get; set; }
        public int numero2 { get; set; }
        public int total { get; set; }
        [Range(1, 4, ErrorMessage = "O tipo de operação valido deve ter valor entre 1 e 4")]
        public int tipoOperacao { get; set; }
    }
}
