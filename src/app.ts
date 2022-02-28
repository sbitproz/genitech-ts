import Handlebars from 'handlebars';
import { config, mentorSchema } from "./config/mm-config";
import { commands } from '@commands/buildProject';

Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
});

commands(mentorSchema, config); 