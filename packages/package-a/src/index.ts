import packageB from '@publish-test/changeset-test-b';
import packageC from '@publish-test/changeset-test-c';

function templateEg(): void {
  console.log('Lib exempli.');
  console.log(packageB);
  console.log(packageC);
}

export default templateEg;
