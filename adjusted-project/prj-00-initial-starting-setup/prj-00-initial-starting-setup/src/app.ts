import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';
import _ from 'lodash';
console.log(_.shuffle([1,2,3]));
new ProjectInput();
new ProjectList('active');
new ProjectList('finished');