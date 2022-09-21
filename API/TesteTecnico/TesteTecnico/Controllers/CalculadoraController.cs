using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteTecnico.Controllers.Enumeradores;
using TesteTecnico.Controllers.Models;

namespace TesteTecnico.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CalculadoraController : ControllerBase
    {
        [HttpPost]
        public IActionResult Calcular([FromBody] ConteudoModel model)
        {
            switch (model.tipoOperacao)
            {
                case 1:
                    model.total = model.numero1 + model.numero2;
                    break;

                case 2:
                    model.total = model.numero1 - model.numero2;
                    break;

                case 3:
                    model.total = model.numero1 / model.numero2;
                    break;

                case 4:
                    model.total = model.numero1 * model.numero2;
                    break;

                default:
                    return BadRequest();
            }
            return Ok(model);
        }

        [HttpGet]
        public IActionResult ListarTipoOperacao()
        {
            List<TipoOperacaoModel> listaOperacao = new List<TipoOperacaoModel>();
            // Mock de Operações
            listaOperacao.Add(new TipoOperacaoModel { id = (int)EnumTipoOperacao.Soma, nome = EnumTipoOperacao.Soma.ToString() });
            listaOperacao.Add(new TipoOperacaoModel { id = (int)EnumTipoOperacao.Subtração, nome = EnumTipoOperacao.Subtração.ToString() });
            listaOperacao.Add(new TipoOperacaoModel { id = (int)EnumTipoOperacao.Divisão, nome = EnumTipoOperacao.Divisão.ToString() });
            listaOperacao.Add(new TipoOperacaoModel { id = (int)EnumTipoOperacao.Multiplicação, nome = EnumTipoOperacao.Multiplicação.ToString() });

            return Ok(listaOperacao);
        }
    }
}
