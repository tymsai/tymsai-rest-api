/**
 * Copyright Marmoym 2017
 */
import { Router, Request, Response } from 'express'

import db from '../../database';
import { respond } from '../../services/responseService';
import * as URL from '../URL';
import { DefinitionRequest } from '../RequestTypes';
import * as DefinitionAddController from '../../controllers/Definition/DefinitionAddController';
import * as DefinitionGetController from '../../controllers/Definition/DefinitionGetController';

function definitionRoute(router) {
  router.route(URL.DEFINITION)
    
    /**
     * Definition 등록
     */
    .post((request: Request, response: Response) => {
      const req: DefinitionRequest.Add = request.body;
      const payload = DefinitionAddController.addDefinition(req);

      respond(response, payload);
    })


  router.route(URL.DEFINITION_GETLIST_BY_TERMID)
    /**
     * termId로 Definitions가져오기
     */
    .get((request: Request, response: Response) => {
      let req: DefinitionRequest.Get = request.params;
      req.offset = request.query.offset; //offset 추가
      
      const payload = DefinitionGetController.getDefinitionByTermId(req);

      respond(response, payload);
    })
}

export default definitionRoute;